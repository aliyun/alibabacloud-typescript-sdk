// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventBridgeIntegrationsResponseBodyPageBeanEventBridgeIntegrations extends $dara.Model {
  /**
   * @remarks
   * The description of the EventBridge integration.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the EventBridge integration.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the EventBridge integration.
   * 
   * @example
   * EventBridge_Test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBridgeIntegrationsResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The EventBridge integrations.
   */
  eventBridgeIntegrations?: ListEventBridgeIntegrationsResponseBodyPageBeanEventBridgeIntegrations[];
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 15
   */
  size?: number;
  /**
   * @remarks
   * The total number of EventBridge integrations that are returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      eventBridgeIntegrations: 'EventBridgeIntegrations',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBridgeIntegrations: { 'type': 'array', 'itemType': ListEventBridgeIntegrationsResponseBodyPageBeanEventBridgeIntegrations },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventBridgeIntegrations)) {
      $dara.Model.validateArray(this.eventBridgeIntegrations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBridgeIntegrationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about EventBridge integrations that is returned on each page.
   */
  pageBean?: ListEventBridgeIntegrationsResponseBodyPageBean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2B289756-E791-5842-BCBD-AD414C******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: ListEventBridgeIntegrationsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

