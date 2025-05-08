// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * a2bac6f4-75dc-455e-8389-2dc8e47526d3
   */
  appId?: string;
  /**
   * @remarks
   * The information template for phased update. The value must be a JSON string and contain the following information:
   * 
   * *   Version range that you want to update
   * *   Configuration information of the target version
   * *   Canary release policy for resources
   * *   Intelligent upgrade policy that contains information such as the time window and resource usage limit
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"fromAppVersions\\":{        \\"operator\\":\\"In\\",        \\"values\\":[            \\"v1\\",            \\"v2\\"        ]    },    \\"toAppVersion\\":\\"v3\\",    \\"descrip\\":\\"xxx\\",    \\"workload\\":[        {            \\"name\\":\\"nginx\\",            \\"podSpec\\":{            }        }    ],    \\"upgradeStrategy\\":{        \\"name\\":\\"ScheduleToISP\\",        \\"parameters\\":{            \\"operator\\":\\"In\\",            \\"values\\":[                \\"telecom\\"            ]        }    },    \\"autoUpgradeStrategy\\":{        \\"name\\":\\"AdjustToPodUsage\\",        \\"checkInterval\\":600,        \\"startTime\\":\\"2021-02-19 00:00:00\\",        \\"startHourPoint\\":\\"0\\",        \\"endHourPoint\\":\\"8\\",        \\"endTime\\":\\"2021-02-19 08:00:00\\",        \\"level\\":\\"RegionId\\",        \\"rules\\":[            {                \\"regionCodes\\":[                    \\"cn-wuxi-telecom_unicom_cmcc\\",                    \\"cn-shijiazhuang-telecom_unicom_cmcc\\"                ],                \\"usageRatioLimit\\":{                    \\"maxPodUsageRatio\\":50                },                \\"maxUpgradingRatio\\":50            },            {                \\"regionCodes\\":[                    \\"cn-wuhan-telecom_unicom_cmcc\\"                ],                \\"usageRatioLimit\\":{                    \\"maxPodUsageRatio\\":30                },                \\"maxUpgradingRatio\\":20            },            {                \\"regionCodes\\":[                    \\"All\\"                ],                \\"usageRatioLimit\\":{                    \\"maxPodUsageRatio\\":20                },                \\"maxUpgradingRatio\\":50,                \\"maxUpgradingCount\\":2            }        ]    }}
   */
  template?: string;
  /**
   * @remarks
   * The timeout period for asynchronous upgrade. Unit: seconds. Default value: 300.
   * 
   * @example
   * 1800
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      template: 'Template',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      template: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

