// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsTrendGroupOutputTpsResponseBodyDataRecordsStatsDataDo extends $dara.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBodyDataRecords extends $dara.Model {
  statsDataDo?: OnsTrendGroupOutputTpsResponseBodyDataRecordsStatsDataDo[];
  static names(): { [key: string]: string } {
    return {
      statsDataDo: 'StatsDataDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsDataDo: { 'type': 'array', 'itemType': OnsTrendGroupOutputTpsResponseBodyDataRecordsStatsDataDo },
    };
  }

  validate() {
    if(Array.isArray(this.statsDataDo)) {
      $dara.Model.validateArray(this.statsDataDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBodyData extends $dara.Model {
  records?: OnsTrendGroupOutputTpsResponseBodyDataRecords;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx%test@MQ_INST_111111111111_DOxxxxxx%GID_test trend chart of delivered messages
   */
  title?: string;
  /**
   * @remarks
   * The unit of the timestamp.
   * 
   * @example
   * time
   */
  XUnit?: string;
  /**
   * @remarks
   * The total number of messages.
   * 
   * @example
   * msg
   */
  YUnit?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      title: 'Title',
      XUnit: 'XUnit',
      YUnit: 'YUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: OnsTrendGroupOutputTpsResponseBodyDataRecords,
      title: 'string',
      XUnit: 'string',
      YUnit: 'string',
    };
  }

  validate() {
    if(this.records && typeof (this.records as any).validate === 'function') {
      (this.records as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsTrendGroupOutputTpsResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use the ID to troubleshoot issues.
   * 
   * @example
   * CE57AEDC-8FD2-43ED-8E3B-1F878077****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsTrendGroupOutputTpsResponseBodyData,
      requestId: 'string',
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

