// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClearLogstoreStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the request source. Set the value to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the user LogStore.
   * 
   * @example
   * sas_sls_storage
   */
  userLogStore?: string;
  /**
   * @remarks
   * The user project.
   * 
   * @example
   * sas-log-1234(uid)-cn-hangzhou
   */
  userProject?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      lang: 'Lang',
      userLogStore: 'UserLogStore',
      userProject: 'UserProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      lang: 'string',
      userLogStore: 'string',
      userProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

