// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiSchemaUsageResponseBodyUsages extends $dara.Model {
  /**
   * @example
   * 40000449
   */
  id?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
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
   * @example
   * esa-site-agknce3n****
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  instanceUsage?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 952ea16b-1f05-4a76-bb32-420282d8****
   */
  requestId?: string;
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

