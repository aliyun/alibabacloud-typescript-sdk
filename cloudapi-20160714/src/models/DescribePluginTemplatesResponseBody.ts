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

export class DescribePluginTemplatesResponseBodyTemplates extends $dara.Model {
  template?: DescribePluginTemplatesResponseBodyTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': DescribePluginTemplatesResponseBodyTemplatesTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.template)) {
      $dara.Model.validateArray(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EF924FE4-2EDD-4CD3-89EC-34E4708574E7
   */
  requestId?: string;
  /**
   * @remarks
   * The templates.
   */
  templates?: DescribePluginTemplatesResponseBodyTemplates;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: DescribePluginTemplatesResponseBodyTemplates,
    };
  }

  validate() {
    if(this.templates && typeof (this.templates as any).validate === 'function') {
      (this.templates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

