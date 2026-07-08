// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloudAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access key.
   * 
   * @example
   * 132
   */
  accessId?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

