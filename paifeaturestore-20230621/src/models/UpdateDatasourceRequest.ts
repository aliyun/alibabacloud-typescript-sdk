// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasourceRequest extends $dara.Model {
  /**
   * @example
   * {"address": ""}
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * datasource1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * igraph_instance1
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

