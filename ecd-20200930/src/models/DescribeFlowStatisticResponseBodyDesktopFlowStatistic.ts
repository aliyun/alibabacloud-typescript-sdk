// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowStatisticResponseBodyDesktopFlowStatistic extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * ecd-8bslxqq0csytn****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud computer.
   * 
   * @example
   * desktop-1
   */
  desktopName?: string;
  /**
   * @remarks
   * The traffic amount. Unit: KB.
   * 
   * @example
   * 1000
   */
  flowIn?: string;
  /**
   * @remarks
   * The traffic ranking.
   * 
   * @example
   * 1
   */
  flowRank?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      flowIn: 'FlowIn',
      flowRank: 'FlowRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      flowIn: 'string',
      flowRank: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

