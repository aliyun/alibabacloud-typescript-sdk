// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes";


export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappings extends $dara.Model {
  childNodes?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      childNodes: 'childNodes',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNodes: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childNodes)) {
      $dara.Model.validateArray(this.childNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

