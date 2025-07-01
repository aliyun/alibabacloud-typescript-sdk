// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMountedClientsResponseBodyClientsClient } from "./DescribeMountedClientsResponseBodyClientsClient";


export class DescribeMountedClientsResponseBodyClients extends $dara.Model {
  client?: DescribeMountedClientsResponseBodyClientsClient[];
  static names(): { [key: string]: string } {
    return {
      client: 'Client',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: { 'type': 'array', 'itemType': DescribeMountedClientsResponseBodyClientsClient },
    };
  }

  validate() {
    if(Array.isArray(this.client)) {
      $dara.Model.validateArray(this.client);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

