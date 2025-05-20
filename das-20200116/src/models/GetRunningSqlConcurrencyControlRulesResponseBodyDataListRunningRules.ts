// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunningSqlConcurrencyControlRulesResponseBodyDataListRunningRules extends $dara.Model {
  /**
   * @remarks
   * The duration within which the SQL throttling rule takes effect. Unit: seconds.
   * 
   * > The throttling rule takes effect only within this duration.
   * 
   * @example
   * 600
   */
  concurrencyControlTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the throttling rule that is applied to the instance.
   * 
   * @example
   * 16
   */
  itemId?: number;
  /**
   * @remarks
   * The hash value of the SQL keywords. The hash value is calculated based on the SQL keywords that are contained in the SQL statements to which the throttling rule is applied.
   * 
   * @example
   * b0b8aceeb43baea87b219c81767b****
   */
  keywordsHash?: string;
  /**
   * @remarks
   * The maximum number of concurrent SQL statements. The value is a positive integer.
   * 
   * > If the number of concurrent SQL statements that contain the specified keywords reaches this upper limit, the throttling rule is triggered.
   * 
   * @example
   * 2
   */
  maxConcurrency?: string;
  /**
   * @remarks
   * The keywords contained in the SQL statements to which the throttling rule was applied.
   * 
   * > SQL keywords are separated by tildes (~). If the number of concurrent SQL statements that contain all the specified SQL keywords reaches the specified upper limit, the throttling rule is triggered.
   * 
   * @example
   * call~open~api~test~4~from~POP
   */
  sqlKeywords?: string;
  /**
   * @remarks
   * The type of the SQL statements. Valid values:
   * 
   * * **SELECT**
   * * **UPDATE**
   * * **DELETE**
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The time when the throttling rule started to take effect. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1608888296000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the throttling rule. The value of **Open** indicates that the throttling rule is in effect.
   * 
   * @example
   * Open
   */
  status?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * testxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      concurrencyControlTime: 'ConcurrencyControlTime',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      keywordsHash: 'KeywordsHash',
      maxConcurrency: 'MaxConcurrency',
      sqlKeywords: 'SqlKeywords',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrencyControlTime: 'number',
      instanceId: 'string',
      itemId: 'number',
      keywordsHash: 'string',
      maxConcurrency: 'string',
      sqlKeywords: 'string',
      sqlType: 'string',
      startTime: 'number',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

