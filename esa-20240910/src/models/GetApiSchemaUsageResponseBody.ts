// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiSchemaUsageResponseBodyUsages extends $dara.Model {
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 40000449
   */
  id?: number;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of API schema files uploaded for this site.
   * 
   * @example
   * 0
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiSchemaUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plan\\"s instance ID.
   * 
   * @example
   * esa-site-agknce3n****
   */
  instanceId?: string;
  /**
   * @remarks
   * The total count of API schema files uploaded to the plan instance.
   * 
   * @example
   * 10
   */
  instanceUsage?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 952ea16b-1f05-4a76-bb32-420282d8****
   */
  requestId?: string;
  /**
   * @remarks
   * The usage details for each site.
   */
  usages?: GetApiSchemaUsageResponseBodyUsages[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceUsage: 'InstanceUsage',
      requestId: 'RequestId',
      usages: 'Usages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceUsage: 'number',
      requestId: 'string',
      usages: { 'type': 'array', 'itemType': GetApiSchemaUsageResponseBodyUsages },
    };
  }

  validate() {
    if(Array.isArray(this.usages)) {
      $dara.Model.validateArray(this.usages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

