// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsDatasourcesResponseBodyApsDatasources extends $dara.Model {
  /**
   * @remarks
   * The time when the data source was created.
   * 
   * @example
   * 2024-01-10 14:44:33
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * test
   */
  datasourceDescription?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 1
   */
  datasourceId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test
   */
  datasourceName?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * SLS
   */
  datasourceType?: string;
  /**
   * @remarks
   * Indicates whether a job is using the data source.
   * 
   * @example
   * false
   */
  hasJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      datasourceDescription: 'DatasourceDescription',
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      datasourceType: 'DatasourceType',
      hasJob: 'HasJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      datasourceDescription: 'string',
      datasourceId: 'number',
      datasourceName: 'string',
      datasourceType: 'string',
      hasJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

