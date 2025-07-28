// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstancePropertiesResponseBodyPropertyTemplateModel extends $dara.Model {
  /**
   * @example
   * { "propties":{"key1":"value1"}}
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancePropertiesResponseBody extends $dara.Model {
  propertyTemplateModel?: GetInstancePropertiesResponseBodyPropertyTemplateModel;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      propertyTemplateModel: 'PropertyTemplateModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyTemplateModel: GetInstancePropertiesResponseBodyPropertyTemplateModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.propertyTemplateModel && typeof (this.propertyTemplateModel as any).validate === 'function') {
      (this.propertyTemplateModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

