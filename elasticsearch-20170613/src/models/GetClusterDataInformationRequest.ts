// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterDataInformationRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster type, access endpoint, and index to be queried.
   * 
   * @example
   * {"dataSourceType":"elasticsearch","endpoint":"http://es-cn-npk1shyiq000d****.public.elasticsearch.aliyuncs.com:9200","username":"elastic","password":"xxxxxx","index":"default","type":"default"}
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

