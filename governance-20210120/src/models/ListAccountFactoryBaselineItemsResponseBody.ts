// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountFactoryBaselineItemsResponseBodyBaselineItemsDependsOn extends $dara.Model {
  /**
   * @remarks
   * The name of the baseline item.
   * 
   * @example
   * ACS-BP_ACCOUNT_FACTORY_VPC
   */
  name?: string;
  /**
   * @remarks
   * The type of the baseline item.
   * 
   * @example
   * AccountFactory
   */
  type?: string;
  /**
   * @remarks
   * The version of the baseline item.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselineItemsResponseBodyBaselineItems extends $dara.Model {
  /**
   * @remarks
   * The dependency of the baseline item.
   */
  dependsOn?: ListAccountFactoryBaselineItemsResponseBodyBaselineItemsDependsOn[];
  /**
   * @remarks
   * The description of the baseline item.
   * 
   * @example
   * Notification.
   */
  description?: string;
  /**
   * @remarks
   * The name of the baseline item.
   * 
   * @example
   * ACS-BP_ACCOUNT_FACTORY_ACCOUNT_NOTIFICATION
   */
  name?: string;
  /**
   * @remarks
   * The type of the baseline item.
   * 
   * @example
   * AccountFactory
   */
  type?: string;
  /**
   * @remarks
   * The version of the baseline item.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dependsOn: 'DependsOn',
      description: 'Description',
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependsOn: { 'type': 'array', 'itemType': ListAccountFactoryBaselineItemsResponseBodyBaselineItemsDependsOn },
      description: 'string',
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dependsOn)) {
      $dara.Model.validateArray(this.dependsOn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselineItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The baseline items.
   */
  baselineItems?: ListAccountFactoryBaselineItemsResponseBodyBaselineItems[];
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAACDGQdAEX3m42z3sQ+f3VTK2Xr2DzYbz/SAfc/zJRqod
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B40D73D8-76AC-5D3C-AC63-4FC8AFCE6671
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineItems: 'BaselineItems',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineItems: { 'type': 'array', 'itemType': ListAccountFactoryBaselineItemsResponseBodyBaselineItems },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselineItems)) {
      $dara.Model.validateArray(this.baselineItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

