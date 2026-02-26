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
   * Name of the dataset
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * Elements
   */
  elements?: Element[];
  /**
   * @remarks
   * Media type of the current file
   * 
   * Valid values:
   * 
   * *   image
   * *   other
   * *   document
   * *   archive
   * *   audio
   * *   video
   * 
   * @example
   * document
   */
  mediaType?: string;
  /**
   * @remarks
   * The URI of the OSS object. This parameter is available only if the value of the URI parameter is the URI of a file in Photo and Drive Service.
   * 
   * @example
   * oss://test-bucket/test-object.jpg
   */
  OSSURI?: string;
  /**
   * @remarks
   * The identifier of the corresponding file that exists in the dataset.
   * 
   * @example
   * 0939d7ed-73fa-4009-bbe6-fbbe07b92b2e
   */
  objectId?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 1482910009923706
   */
  ownerId?: string;
  /**
   * @remarks
   * Name of the project
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * URI of the file. Specify the OSS URI in the oss://${bucketname}/${objectname} format, where ${bucketname} is the name of the bucket in the same region as the current project and ${objectname} is the path of the object. The URI of a file in Photo and Drive Service follows the pds://domains/${domain}/drives/${drive}/files/${file}/revisions/${revision} format.
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

