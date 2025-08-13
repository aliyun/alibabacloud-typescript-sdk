// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExcuteNumRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  code?: string;
  degree?: string;
  endDate?: string;
  lang?: string;
  sourceIp?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      degree: 'Degree',
      endDate: 'EndDate',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      degree: 'string',
      endDate: 'string',
      lang: 'string',
      sourceIp: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

