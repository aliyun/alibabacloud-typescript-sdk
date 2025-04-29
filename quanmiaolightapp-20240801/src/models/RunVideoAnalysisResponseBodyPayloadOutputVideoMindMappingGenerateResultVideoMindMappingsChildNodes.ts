// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes";


export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes extends $dara.Model {
  childNodes?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      childNodes: 'childNodes',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNodes: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes },
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

