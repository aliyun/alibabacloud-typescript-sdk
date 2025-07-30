// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ExistedPropertyValue
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The property value is used by another property.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the property.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * testvalue
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      propertyId: 'PropertyId',
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      propertyId: 'number',
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

export class UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues extends $dara.Model {
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * testvalue2
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of the property value.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel extends $dara.Model {
  /**
   * @remarks
   * The property values that failed to be modified.
   */
  failedPropertyValues?: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues[];
  /**
   * @remarks
   * The property values that were modified.
   */
  savePropertyValues?: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues[];
  static names(): { [key: string]: string } {
    return {
      failedPropertyValues: 'FailedPropertyValues',
      savePropertyValues: 'SavePropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedPropertyValues: { 'type': 'array', 'itemType': UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues },
      savePropertyValues: { 'type': 'array', 'itemType': UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues },
    };
  }

  validate() {
    if(Array.isArray(this.failedPropertyValues)) {
      $dara.Model.validateArray(this.failedPropertyValues);
    }
    if(Array.isArray(this.savePropertyValues)) {
      $dara.Model.validateArray(this.savePropertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBodyUpdateResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the property.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * testkey2
   */
  propertyKey?: string;
  /**
   * @remarks
   * The result of the property value modification.
   */
  savePropertyValueModel?: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      savePropertyValueModel: 'SavePropertyValueModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      savePropertyValueModel: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel,
    };
  }

  validate() {
    if(this.savePropertyValueModel && typeof (this.savePropertyValueModel as any).validate === 'function') {
      (this.savePropertyValueModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the modification.
   */
  updateResult?: UpdatePropertyResponseBodyUpdateResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateResult: UpdatePropertyResponseBodyUpdateResult,
    };
  }

  validate() {
    if(this.updateResult && typeof (this.updateResult as any).validate === 'function') {
      (this.updateResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

