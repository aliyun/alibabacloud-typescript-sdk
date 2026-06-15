// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceDatasourceRequest extends $dara.Model {
  /**
   * @remarks
   * The resource configuration.
   * 
   * @example
   * {"address": ""}
   */
  config?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * - Hologres
   * 
   * - Redis
   * 
   * - MaxCompute
   * 
   * This parameter is required.
   * 
   * @example
   * Hologres
   */
  type?: string;
  /**
   * @remarks
   * The resource URI.
   * 
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

