// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMqTopicsRequest extends $dara.Model {
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

