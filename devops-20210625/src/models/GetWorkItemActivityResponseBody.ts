// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkItemActivityResponseBodyActivitiesNewValue extends $dara.Model {
  /**
   * @example
   * Sprint-221124
   */
  displayValue?: string;
  /**
   * @example
   * bed1cca179badeb501a72d1194
   */
  plainValue?: string;
  /**
   * @example
   * Sprint
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      displayValue: 'displayValue',
      plainValue: 'plainValue',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayValue: 'string',
      plainValue: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemActivityResponseBodyActivitiesOldValue extends $dara.Model {
  /**
   * @example
   * Sprint-221124
   */
  displayValue?: string;
  /**
   * @example
   * bed1cca179badeb501a72d1194
   */
  plainValue?: string;
  /**
   * @example
   * Sprint
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      displayValue: 'displayValue',
      plainValue: 'plainValue',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayValue: 'string',
      plainValue: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemActivityResponseBodyActivitiesProperty extends $dara.Model {
  /**
   * @example
   * 标题
   */
  displayName?: string;
  /**
   * @example
   * subject
   */
  propertyIdentifier?: string;
  /**
   * @example
   * subject
   */
  propertyName?: string;
  /**
   * @example
   * null
   */
  propertyType?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      propertyIdentifier: 'propertyIdentifier',
      propertyName: 'propertyName',
      propertyType: 'propertyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      propertyIdentifier: 'string',
      propertyName: 'string',
      propertyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemActivityResponseBodyActivities extends $dara.Model {
  /**
   * @example
   * update
   */
  actionType?: string;
  /**
   * @example
   * 3201131
   */
  eventId?: number;
  /**
   * @example
   * 1640867079624
   */
  eventTime?: number;
  /**
   * @example
   * workitem.updated
   */
  eventType?: string;
  newValue?: GetWorkItemActivityResponseBodyActivitiesNewValue[];
  oldValue?: GetWorkItemActivityResponseBodyActivitiesOldValue[];
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  operator?: string;
  /**
   * @example
   * 3201132
   */
  parentEventId?: number;
  /**
   * @example
   * public
   */
  property?: GetWorkItemActivityResponseBodyActivitiesProperty;
  /**
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  resourceIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'actionType',
      eventId: 'eventId',
      eventTime: 'eventTime',
      eventType: 'eventType',
      newValue: 'newValue',
      oldValue: 'oldValue',
      operator: 'operator',
      parentEventId: 'parentEventId',
      property: 'property',
      resourceIdentifier: 'resourceIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      eventId: 'number',
      eventTime: 'number',
      eventType: 'string',
      newValue: { 'type': 'array', 'itemType': GetWorkItemActivityResponseBodyActivitiesNewValue },
      oldValue: { 'type': 'array', 'itemType': GetWorkItemActivityResponseBodyActivitiesOldValue },
      operator: 'string',
      parentEventId: 'number',
      property: GetWorkItemActivityResponseBodyActivitiesProperty,
      resourceIdentifier: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.newValue)) {
      $dara.Model.validateArray(this.newValue);
    }
    if(Array.isArray(this.oldValue)) {
      $dara.Model.validateArray(this.oldValue);
    }
    if(this.property && typeof (this.property as any).validate === 'function') {
      (this.property as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemActivityResponseBody extends $dara.Model {
  activities?: GetWorkItemActivityResponseBodyActivities[];
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      activities: 'activities',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activities: { 'type': 'array', 'itemType': GetWorkItemActivityResponseBodyActivities },
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.activities)) {
      $dara.Model.validateArray(this.activities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

