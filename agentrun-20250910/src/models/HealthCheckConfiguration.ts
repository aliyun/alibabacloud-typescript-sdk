// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HealthCheckConfiguration extends $dara.Model {
  /**
   * @remarks
   * 在将容器视为不健康之前，连续失败的健康检查次数
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  /**
   * @remarks
   * 用于健康检查的HTTP GET请求的URL地址
   * 
   * @example
   * /ready
   */
  httpGetUrl?: string;
  /**
   * @remarks
   * 在容器启动后，首次执行健康检查前的延迟时间（秒）
   * 
   * @example
   * 30
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * 执行健康检查的时间间隔（秒）
   * 
   * @example
   * 30
   */
  periodSeconds?: number;
  /**
   * @remarks
   * 在将容器视为健康之前，连续成功的健康检查次数
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  /**
   * @remarks
   * 健康检查的超时时间（秒）
   * 
   * @example
   * 3
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      failureThreshold: 'failureThreshold',
      httpGetUrl: 'httpGetUrl',
      initialDelaySeconds: 'initialDelaySeconds',
      periodSeconds: 'periodSeconds',
      successThreshold: 'successThreshold',
      timeoutSeconds: 'timeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureThreshold: 'number',
      httpGetUrl: 'string',
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      timeoutSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

