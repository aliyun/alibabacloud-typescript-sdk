// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceDatasourceRequest extends $dara.Model {
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
   * Hologres
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * igraph1
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      type: 'string',
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

