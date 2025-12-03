// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectFieldRequestUpdateBasicFieldRequestList extends $dara.Model {
  /**
   * @example
   * name
   */
  propertyKey?: string;
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'propertyKey',
      propertyValue: 'propertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectFieldRequestUpdateForOpenApiList extends $dara.Model {
  /**
   * @example
   * c4fd21xxxxxxxx9oj8jk
   */
  fieldIdentifier?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdentifier: 'fieldIdentifier',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdentifier: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectFieldRequest extends $dara.Model {
  /**
   * @example
   * fdsaadsfasxxxxdddd
   */
  statusIdentifier?: string;
  updateBasicFieldRequestList?: UpdateProjectFieldRequestUpdateBasicFieldRequestList[];
  updateForOpenApiList?: UpdateProjectFieldRequestUpdateForOpenApiList[];
  static names(): { [key: string]: string } {
    return {
      statusIdentifier: 'statusIdentifier',
      updateBasicFieldRequestList: 'updateBasicFieldRequestList',
      updateForOpenApiList: 'updateForOpenApiList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusIdentifier: 'string',
      updateBasicFieldRequestList: { 'type': 'array', 'itemType': UpdateProjectFieldRequestUpdateBasicFieldRequestList },
      updateForOpenApiList: { 'type': 'array', 'itemType': UpdateProjectFieldRequestUpdateForOpenApiList },
    };
  }

  validate() {
    if(Array.isArray(this.updateBasicFieldRequestList)) {
      $dara.Model.validateArray(this.updateBasicFieldRequestList);
    }
    if(Array.isArray(this.updateForOpenApiList)) {
      $dara.Model.validateArray(this.updateForOpenApiList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

