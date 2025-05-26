// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Element } from "./Element";


export class ContextualFile extends $dara.Model {
  contentType?: string;
  datasetName?: string;
  elements?: Element[];
  mediaType?: string;
  OSSURI?: string;
  objectId?: string;
  ownerId?: string;
  projectName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      datasetName: 'DatasetName',
      elements: 'Elements',
      mediaType: 'MediaType',
      OSSURI: 'OSSURI',
      objectId: 'ObjectId',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      datasetName: 'string',
      elements: { 'type': 'array', 'itemType': Element },
      mediaType: 'string',
      OSSURI: 'string',
      objectId: 'string',
      ownerId: 'string',
      projectName: 'string',
      URI: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

