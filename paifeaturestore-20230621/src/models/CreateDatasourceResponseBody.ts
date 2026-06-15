// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the datasource.
   * 
   * @example
   * 3
   */
  datasourceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1C5B1511-8A5B-59C3-90AF-513F9210E882
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

