// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionInputInputFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input media file is stored.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the input file resides.
   * 
   * @example
   * cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input media file.
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

