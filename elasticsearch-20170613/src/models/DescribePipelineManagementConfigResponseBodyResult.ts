// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePipelineManagementConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The access addresses of the Elasticsearch cluster. Specify each address in the `http://Endpoint of the Elasticsearch cluster:Port number` format.
   * 
   * @example
   * ["http://es-cn-n6w1o1x0w001c****.elasticsearch.aliyuncs.com:9200"]
   */
  endpoints?: string;
  /**
   * @remarks
   * The ID of the Elasticsearch cluster.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****
   */
  esInstanceId?: string;
  pipelineIds?: string[];
  /**
   * @remarks
   * The pipeline management method. Valid values: Kibana and MULTIPLE_PIPELINE.
   * 
   * @example
   * MULTIPLE_PIPELINE
   */
  pipelineManagementType?: string;
  /**
   * @remarks
   * The username that is used to access the Elasticsearch cluster.
   * 
   * @example
   * elastic
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
      esInstanceId: 'esInstanceId',
      pipelineIds: 'pipelineIds',
      pipelineManagementType: 'pipelineManagementType',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: 'string',
      esInstanceId: 'string',
      pipelineIds: { 'type': 'array', 'itemType': 'string' },
      pipelineManagementType: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pipelineIds)) {
      $dara.Model.validateArray(this.pipelineIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

