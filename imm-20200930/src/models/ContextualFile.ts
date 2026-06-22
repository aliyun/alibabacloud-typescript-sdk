// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Element } from "./Element";


export class ContextualFile extends $dara.Model {
  /**
   * @remarks
   * The Multipurpose Internet Mail Extensions (MIME) type of the file.
   * 
   * @example
   * text/x-imm-faq
   */
  contentType?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * Elements.
   */
  elements?: Element[];
  /**
   * @remarks
   * The media type of the file.
   * 
   * @example
   * document
   */
  mediaType?: string;
  /**
   * @remarks
   * The URI path of the OSS file. This parameter is used only when the URI is a PDS address.
   * 
   * @example
   * oss://test-bucket/test-object.jpg
   */
  OSSURI?: string;
  /**
   * @remarks
   * The identifier of the file in the dataset.
   * 
   * @example
   * 0939d7ed-73fa-4009-bbe6-fbbe07b92b2e
   */
  objectId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1482910009923706
   */
  ownerId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The URI of the file.
   * The format of an OSS URI is oss\\://${bucketname}/${objectname}. ${bucketname} is the name of an OSS bucket in the same region as the current project. ${objectname} is the file path.
   * The format of a PDS URI is pds\\://domains/${domain}/drives/${drive}/files/${file}/revisions/${revision}.
   * 
   * @example
   * oss://test-bucket
   */
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

