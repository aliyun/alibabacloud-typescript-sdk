// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatasourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 195
   */
  datasourceId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      datasourceId: 'DatasourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      datasourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

