// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventVariableListRequest extends $dara.Model {
  lang?: string;
  createType?: string;
  filterDTO?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  refObjId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  refObjType?: string;
  regId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      filterDTO: 'filterDTO',
      refObjId: 'refObjId',
      refObjType: 'refObjType',
      regId: 'regId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      filterDTO: 'string',
      refObjId: 'string',
      refObjType: 'string',
      regId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

