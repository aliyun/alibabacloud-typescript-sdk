// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudAgentMonitorStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * 说明：根据座席工号查询指定座席的统计项名称支持按照多个座席工号进行查询，多个座席工号之间使用英文逗号","分隔，默认查询账户下所有座席的统计信息
   * 
   * @example
   * 1111
   */
  cnos?: string;
  /**
   * @remarks
   * 统计时间段；正整数，1～24，最大值是24时
   * 
   * @example
   * 23
   */
  endHour?: number;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 统计项名称；取队列实时统计的统计字段名称，多个队列统计项之间使用英文逗号","分隔，默认查询所有统计项
   * 
   * @example
   * ""
   */
  fields?: string;
  /**
   * @remarks
   * 说明：根据外呼组编号查询指定座席的统计项名称支持按照多个外呼组编号进行查询，多个座席工号之间使用英文逗号","分隔，默认查询账户下所有座席的统计信息
   * 
   * @example
   * WH123
   */
  gno?: string;
  /**
   * @remarks
   * 是否需要返回队列名称；0：不需要（默认） 1：需要
   * 
   * @example
   * 0
   */
  isNeedQueueName?: string;
  /**
   * @remarks
   * 是否需要外呼组查询；说明：0 关闭外呼组查询，1 开启外呼组查询。默认为关闭状态
   * 
   * @example
   * 0
   */
  isUseGno?: number;
  /**
   * @remarks
   * 条数；正整数，默认值是10，最大值是500
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * 查询页码数的起始条数；正整数，默认值是0；与limit同步使用，例：offset=50,limit=10,表示查询第6页，每页10条数据，即总记录的第51-60条数据
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * 统计时间段；正整数，0～23，最大值是23时
   * 
   * @example
   * 0
   */
  startHour?: number;
  static names(): { [key: string]: string } {
    return {
      cnos: 'Cnos',
      endHour: 'EndHour',
      enterpriseId: 'EnterpriseId',
      fields: 'Fields',
      gno: 'Gno',
      isNeedQueueName: 'IsNeedQueueName',
      isUseGno: 'IsUseGno',
      limit: 'Limit',
      offset: 'Offset',
      startHour: 'StartHour',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnos: 'string',
      endHour: 'number',
      enterpriseId: 'number',
      fields: 'string',
      gno: 'string',
      isNeedQueueName: 'string',
      isUseGno: 'number',
      limit: 'number',
      offset: 'number',
      startHour: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

