// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginSchemasResponseBodyPluginSchemasPluginSchema extends $dara.Model {
  /**
   * @example
   * plugin scheme description
   */
  description?: string;
  /**
   * @example
   * 4107**
   */
  documentId?: string;
  /**
   * @example
   * VPC_C
   */
  name?: string;
  /**
   * @example
   * true
   */
  supportClassic?: boolean;
  /**
   * @example
   * plugin schema title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      documentId: 'DocumentId',
      name: 'Name',
      supportClassic: 'SupportClassic',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      documentId: 'string',
      name: 'string',
      supportClassic: 'boolean',
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

