// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LrOrder } from "./LrOrder";


export class ListServicesResult extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  services?: LrOrder;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      services: 'services',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      services: LrOrder,
      total: 'number',
    };
  }

  validate() {
    if(this.services && typeof (this.services as any).validate === 'function') {
      (this.services as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

