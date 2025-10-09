// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * Detailed configuration Spec code of the rule template. For more information, see [Data quality Spec configuration description](~2963394~).
   * 
   * @example
   * {
   *     "assertion": "anomaly detection fro id_not_null_cnt",
   *     "id_not_null_cnt": {
   *         "query": "SELECT COUNT(*) AS cnt FROM ${tableName} WHERE dt = \\"$[yyyymmdd-1]\\";"
   *     },
   *     "identity": "819cf1f8-29be-4f94-a9d0-c5c06c0c3d2a"
   * }
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      projectId: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

