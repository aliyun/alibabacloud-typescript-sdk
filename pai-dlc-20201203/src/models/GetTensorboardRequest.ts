// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTensorboardRequest extends $dara.Model {
  /**
   * @remarks
   * The job ID. For more information about how to query the job ID, see [ListJob](https://help.aliyun.com/document_detail/459676.html).
   * 
   * @example
   * dlc-xxxxxxxx
   */
  jodId?: string;
  /**
   * @remarks
   * The information about the shared token. You can specify this parameter to obtain the permission to view a TensorBoard job based on the shared token information. You can execute [GetTensorboardSharedUrl](https://help.aliyun.com/document_detail/2557813.html) and extract the shared token from the obtained information.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e
   * yJleHAiOjE2OTUyODA0NTMsImlhdCI6MTY5NTE5NDA1MywidXNlcl9pZCI6IjExN
   * Tc3MDMyNzA5OTQ5MDEiLCJ0YXJnZXRfaWQiOiJ0YjRrOGxjNXhmdTM2b3B0Iiw
   * idGFyZ2V0X3R5cGUiOiJ0ZW5zb3Jib2FyZCJ9.6eT68J-KMBwwfN2d7fj7u6vyPcf0erfqYeizd2N****
   */
  token?: string;
  /**
   * @remarks
   * The workspace ID. 
   * <props="china">For more information about how to query the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * @example
   * 46099
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      jodId: 'JodId',
      token: 'Token',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jodId: 'string',
      token: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

