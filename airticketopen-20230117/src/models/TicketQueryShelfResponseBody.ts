// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketQueryShelfResponseBodyDataShelvesTabsCells extends $dara.Model {
  /**
   * @example
   * 3507
   */
  spuId?: number;
  /**
   * @example
   * 60484007
   */
  ticketKindId?: number;
  static names(): { [key: string]: string } {
    return {
      spuId: 'SpuId',
      ticketKindId: 'TicketKindId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spuId: 'number',
      ticketKindId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryShelfResponseBodyDataShelvesTabs extends $dara.Model {
  cells?: TicketQueryShelfResponseBodyDataShelvesTabsCells[];
  /**
   * @example
   * 1
   */
  tabIndex?: number;
  /**
   * @example
   * 景点门票
   */
  tabName?: string;
  static names(): { [key: string]: string } {
    return {
      cells: 'Cells',
      tabIndex: 'TabIndex',
      tabName: 'TabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cells: { 'type': 'array', 'itemType': TicketQueryShelfResponseBodyDataShelvesTabsCells },
      tabIndex: 'number',
      tabName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cells)) {
      $dara.Model.validateArray(this.cells);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryShelfResponseBodyDataShelves extends $dara.Model {
  /**
   * @example
   * 1951890
   */
  shelfId?: number;
  /**
   * @example
   * 0
   */
  shelfIndex?: number;
  /**
   * @example
   * 1日门票
   */
  shelfName?: string;
  tabs?: TicketQueryShelfResponseBodyDataShelvesTabs[];
  static names(): { [key: string]: string } {
    return {
      shelfId: 'ShelfId',
      shelfIndex: 'ShelfIndex',
      shelfName: 'ShelfName',
      tabs: 'Tabs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shelfId: 'number',
      shelfIndex: 'number',
      shelfName: 'string',
      tabs: { 'type': 'array', 'itemType': TicketQueryShelfResponseBodyDataShelvesTabs },
    };
  }

  validate() {
    if(Array.isArray(this.tabs)) {
      $dara.Model.validateArray(this.tabs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryShelfResponseBodyData extends $dara.Model {
  shelves?: TicketQueryShelfResponseBodyDataShelves[];
  static names(): { [key: string]: string } {
    return {
      shelves: 'Shelves',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shelves: { 'type': 'array', 'itemType': TicketQueryShelfResponseBodyDataShelves },
    };
  }

  validate() {
    if(Array.isArray(this.shelves)) {
      $dara.Model.validateArray(this.shelves);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryShelfResponseBody extends $dara.Model {
  data?: TicketQueryShelfResponseBodyData;
  /**
   * @example
   * ScenicIdInvalid
   */
  errorCode?: string;
  /**
   * @example
   * ScenicId不合法
   */
  errorMsg?: string;
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TicketQueryShelfResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

