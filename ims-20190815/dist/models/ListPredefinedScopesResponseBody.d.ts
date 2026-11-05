import * as $dara from '@darabonba/typescript';
export declare class ListPredefinedScopesResponseBodyPredefinedScopesPredefinedScope extends $dara.Model {
    description?: string;
    name?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListPredefinedScopesResponseBodyPredefinedScopes extends $dara.Model {
    predefinedScope?: ListPredefinedScopesResponseBodyPredefinedScopesPredefinedScope[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListPredefinedScopesResponseBody extends $dara.Model {
    predefinedScopes?: ListPredefinedScopesResponseBodyPredefinedScopes;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 955C096D-EC99-480B-AF37-3921109107D0
     */
    requestId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
