// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsTrendTopicInputTpsResponseBodyDataRecordsStatsDataDo extends $dara.Model {
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

export class OnsTrendTopicInputTpsResponseBodyDataRecords extends $dara.Model {
  statsDataDo?: OnsTrendTopicInputTpsResponseBodyDataRecordsStatsDataDo[];
  static names(): { [key: string]: string } {
    return {
      statsDataDo: 'StatsDataDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsDataDo: { 'type': 'array', 'itemType': OnsTrendTopicInputTpsResponseBodyDataRecordsStatsDataDo },
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

export class OnsTrendTopicInputTpsResponseBodyData extends $dara.Model {
  records?: OnsTrendTopicInputTpsResponseBodyDataRecords;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx%test trend of received messages
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
   * The unit of the Y axis.
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
      records: OnsTrendTopicInputTpsResponseBodyDataRecords,
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

export class OnsTrendTopicInputTpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsTrendTopicInputTpsResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use the ID to troubleshoot issues.
   * 
   * @example
   * E213AD8A-0730-4B3D-A35A-340DA47D****
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
      data: OnsTrendTopicInputTpsResponseBodyData,
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

