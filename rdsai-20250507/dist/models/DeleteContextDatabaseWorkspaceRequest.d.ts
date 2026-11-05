import * as $dara from '@darabonba/typescript';
export declare class DeleteContextDatabaseWorkspaceRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the target workspace.
     *
     * This parameter is required.
     *
     * @example
     * ws-as1llqmkol****
     */
    workspaceId?: string;
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
