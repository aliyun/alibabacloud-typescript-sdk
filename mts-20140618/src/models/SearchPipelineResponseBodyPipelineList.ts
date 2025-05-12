// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchPipelineResponseBodyPipelineListPipeline } from "./SearchPipelineResponseBodyPipelineListPipeline";


export class SearchPipelineResponseBodyPipelineList extends $dara.Model {
  pipeline?: SearchPipelineResponseBodyPipelineListPipeline[];
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: { 'type': 'array', 'itemType': SearchPipelineResponseBodyPipelineListPipeline },
    };
  }

  validate() {
    if(Array.isArray(this.pipeline)) {
      $dara.Model.validateArray(this.pipeline);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

