// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileUploadSignatureRequest extends $dara.Model {
  /**
   * @remarks
   * For frontend use only.
   * 
   * @example
   * For frontend use only
   */
  callFrom?: string;
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * yrgug4e*******ypey63v
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      callFrom: 'CallFrom',
      dmsUnit: 'DmsUnit',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFrom: 'string',
      dmsUnit: 'string',
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

