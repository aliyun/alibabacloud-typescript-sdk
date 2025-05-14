// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchFormDatasResponseBodyDataModifyUser } from "./SearchFormDatasResponseBodyDataModifyUser";
import { SearchFormDatasResponseBodyDataOriginator } from "./SearchFormDatasResponseBodyDataOriginator";


export class SearchFormDatasResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2018-01-24 11:22:01
   */
  createdTimeGMT?: string;
  /**
   * @example
   * 012345
   */
  creatorUserId?: string;
  /**
   * @example
   * 1002
   */
  dataId?: number;
  formData?: { [key: string]: any };
  /**
   * @example
   * FINST-BNKJDRF
   */
  formInstanceId?: string;
  /**
   * @example
   * FORM-EF6Y93URN24F1SCX15VA2P918LPEIJ2H3UFORCJ1
   */
  formUuid?: string;
  /**
   * @example
   * {}
   */
  instanceValue?: string;
  /**
   * @example
   * FORM-EF6Y93URN24F1SCX15VA2P918LPEIJ2H3UFORCJ1
   */
  modelUuid?: string;
  /**
   * @example
   * 2018-01-24 11:22:01
   */
  modifiedTimeGMT?: string;
  /**
   * @example
   * 012345
   */
  modifierUserId?: string;
  modifyUser?: SearchFormDatasResponseBodyDataModifyUser;
  originator?: SearchFormDatasResponseBodyDataOriginator;
  /**
   * @example
   * 1
   */
  sequence?: string;
  /**
   * @example
   * 231008101012015353
   */
  serialNo?: string;
  title?: string;
  /**
   * @example
   * 3
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createdTimeGMT: 'CreatedTimeGMT',
      creatorUserId: 'CreatorUserId',
      dataId: 'DataId',
      formData: 'FormData',
      formInstanceId: 'FormInstanceId',
      formUuid: 'FormUuid',
      instanceValue: 'InstanceValue',
      modelUuid: 'ModelUuid',
      modifiedTimeGMT: 'ModifiedTimeGMT',
      modifierUserId: 'ModifierUserId',
      modifyUser: 'ModifyUser',
      originator: 'Originator',
      sequence: 'Sequence',
      serialNo: 'SerialNo',
      title: 'Title',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTimeGMT: 'string',
      creatorUserId: 'string',
      dataId: 'number',
      formData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formInstanceId: 'string',
      formUuid: 'string',
      instanceValue: 'string',
      modelUuid: 'string',
      modifiedTimeGMT: 'string',
      modifierUserId: 'string',
      modifyUser: SearchFormDatasResponseBodyDataModifyUser,
      originator: SearchFormDatasResponseBodyDataOriginator,
      sequence: 'string',
      serialNo: 'string',
      title: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.formData) {
      $dara.Model.validateMap(this.formData);
    }
    if(this.modifyUser && typeof (this.modifyUser as any).validate === 'function') {
      (this.modifyUser as any).validate();
    }
    if(this.originator && typeof (this.originator as any).validate === 'function') {
      (this.originator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

