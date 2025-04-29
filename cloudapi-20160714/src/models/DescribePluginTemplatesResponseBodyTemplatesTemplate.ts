// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginTemplatesResponseBodyTemplatesTemplate extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * balabala
   */
  description?: string;
  /**
   * @remarks
   * The document anchor point.
   * 
   * @example
   * anchor
   */
  documentAnchor?: string;
  /**
   * @remarks
   * The ID of the document.
   * 
   * @example
   * 41079
   */
  documentId?: string;
  /**
   * @remarks
   * The sample.
   * 
   * @example
   * 1
   */
  sample?: string;
  /**
   * @remarks
   * The title of the plug-in template title.
   * 
   * @example
   * template title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      documentAnchor: 'DocumentAnchor',
      documentId: 'DocumentId',
      sample: 'Sample',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      documentAnchor: 'string',
      documentId: 'string',
      sample: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

