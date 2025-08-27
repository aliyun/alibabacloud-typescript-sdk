// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ElasticConfigStatus } from "./ElasticConfigStatus";


export class ListElasticConfigsOutput extends $dara.Model {
  elasticConfigs?: ElasticConfigStatus[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      elasticConfigs: 'elasticConfigs',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticConfigs: { 'type': 'array', 'itemType': ElasticConfigStatus },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elasticConfigs)) {
      $dara.Model.validateArray(this.elasticConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

