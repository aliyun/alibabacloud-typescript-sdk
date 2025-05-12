// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateErRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Parameter
   * 
   * @example
   * er-wulanchabu-main
   */
  erName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      erId: 'ErId',
      erName: 'ErName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      erId: 'string',
      erName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

