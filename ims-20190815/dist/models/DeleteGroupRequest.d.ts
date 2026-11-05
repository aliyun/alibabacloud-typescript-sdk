import * as $dara from '@darabonba/typescript';
export declare class DeleteGroupRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the RAM user group.
     *
     * @example
     * Dev-Team
     */
    groupName?: string;
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
