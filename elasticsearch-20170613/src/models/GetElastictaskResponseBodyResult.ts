// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetElastictaskResponseBodyResultElasticExpansionTask } from "./GetElastictaskResponseBodyResultElasticExpansionTask";
import { GetElastictaskResponseBodyResultElasticShrinkTask } from "./GetElastictaskResponseBodyResultElasticShrinkTask";


export class GetElastictaskResponseBodyResult extends $dara.Model {
  elasticExpansionTask?: GetElastictaskResponseBodyResultElasticExpansionTask;
  elasticShrinkTask?: GetElastictaskResponseBodyResultElasticShrinkTask;
  static names(): { [key: string]: string } {
    return {
      elasticExpansionTask: 'elasticExpansionTask',
      elasticShrinkTask: 'elasticShrinkTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticExpansionTask: GetElastictaskResponseBodyResultElasticExpansionTask,
      elasticShrinkTask: GetElastictaskResponseBodyResultElasticShrinkTask,
    };
  }

  validate() {
    if(this.elasticExpansionTask && typeof (this.elasticExpansionTask as any).validate === 'function') {
      (this.elasticExpansionTask as any).validate();
    }
    if(this.elasticShrinkTask && typeof (this.elasticShrinkTask as any).validate === 'function') {
      (this.elasticShrinkTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

