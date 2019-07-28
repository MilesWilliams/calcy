
export interface KeyInput {
    display: boolean;
    icon?: string;
    keyCode: string;
    function: FuncTypes;
    position?: number;
    value: string;
    requires_meta: boolean;
}

// Availble functions
export type FuncTypes = 'append' | 'delete' | 'calculate' | 'clear' | 'tip' | 'copy' | 'paste' | 'moduler';