// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTensorboardRequest extends $dara.Model {
  /**
   * @remarks
   * The job ID. Refer to [ListJobs](https://help.aliyun.com/document_detail/459676.html) to obtain the job ID.
   * 
   * @example
   * dlc-xxxxxxxx
   */
  jodId?: string;
  /**
   * @remarks
   * The sharing token. Specify this parameter to use the sharing token to obtain the permission to view a specific Tensorboard job. You can extract the token from the URL returned by calling [GetTensorboardSharedUrl](https://help.aliyun.com/document_detail/2557813.html).
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
   * The workspace ID. <props="china">Refer to [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID..
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

