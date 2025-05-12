// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCdsFileShareLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-352282****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the file sharing task.
   * 
   * This parameter is required.
   * 
   * @example
   * 7JQX1Fsw****
   */
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      shareId: 'ShareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      shareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

