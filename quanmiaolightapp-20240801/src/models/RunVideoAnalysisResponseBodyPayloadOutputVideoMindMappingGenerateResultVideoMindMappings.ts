// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes";


export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings extends $dara.Model {
  childNodes?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      childNodes: 'childNodes',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNodes: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes },
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

