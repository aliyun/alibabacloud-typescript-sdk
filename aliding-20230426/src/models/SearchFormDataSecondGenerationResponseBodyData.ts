// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchFormDataSecondGenerationResponseBodyDataModifyUser } from "./SearchFormDataSecondGenerationResponseBodyDataModifyUser";
import { SearchFormDataSecondGenerationResponseBodyDataOriginator } from "./SearchFormDataSecondGenerationResponseBodyDataOriginator";


export class SearchFormDataSecondGenerationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2021-05-01 10:10:10
   */
  createTimeGMT?: string;
  /**
   * @example
   * 012345
   */
  creatorUserId?: string;
  formData?: { [key: string]: any };
  /**
   * @example
   * FINST-xxxx
   */
  formInstanceId?: string;
  /**
   * @example
   * FORM-xxxx
   */
  formUuid?: string;
  /**
   * @example
   * 1023
   */
  id?: number;
  /**
   * @example
   * {}
   */
  instanceValue?: string;
  /**
   * @example
   * 2021-05-01 10:10:10
   */
  modifiedTimeGMT?: string;
  modifier?: string;
  modifyUser?: SearchFormDataSecondGenerationResponseBodyDataModifyUser;
  originator?: SearchFormDataSecondGenerationResponseBodyDataOriginator;
  /**
   * @example
   * 1
   */
  sequence?: string;
  /**
   * @example
   * sagc1b3090d
   */
  serialNumber?: string;
  title?: string;
  /**
   * @example
   * 3
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeGMT: 'CreateTimeGMT',
      creatorUserId: 'CreatorUserId',
      formData: 'FormData',
      formInstanceId: 'FormInstanceId',
      formUuid: 'FormUuid',
      id: 'Id',
      instanceValue: 'InstanceValue',
      modifiedTimeGMT: 'ModifiedTimeGMT',
      modifier: 'Modifier',
      modifyUser: 'ModifyUser',
      originator: 'Originator',
      sequence: 'Sequence',
      serialNumber: 'SerialNumber',
      title: 'Title',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeGMT: 'string',
      creatorUserId: 'string',
      formData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formInstanceId: 'string',
      formUuid: 'string',
      id: 'number',
      instanceValue: 'string',
      modifiedTimeGMT: 'string',
      modifier: 'string',
      modifyUser: SearchFormDataSecondGenerationResponseBodyDataModifyUser,
      originator: SearchFormDataSecondGenerationResponseBodyDataOriginator,
      sequence: 'string',
      serialNumber: 'string',
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

