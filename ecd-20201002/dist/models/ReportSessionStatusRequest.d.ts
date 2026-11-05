import * as $dara from '@darabonba/typescript';
export declare class ReportSessionStatusRequest extends $dara.Model {
    /**
     * @remarks
     * The connected user.
     *
     * @example
     * liming
     */
    endUserId?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * i-bp167fcodoa90ixn****
     */
    instanceId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The duration of the session change.
     *
     * This parameter is required.
     *
     * @example
     * 1642909143781
     */
    sessionChangeTime?: number;
    /**
     * @remarks
     * The session ID.
     *
     * This parameter is required.
     *
     * @example
     * 2
     */
    sessionId?: string;
    /**
     * @remarks
     * The session status. Valid values:
     *
     * - SessionLogOff: The session is closed.
     * - DesktopTimerDisconnection: The cloud computer is disconnected by a scheduled task.
     * - SessionReboot: The session is rebooted.
     * - DesktopTimerShutdown: The cloud computer is started by a scheduled task.
     * - SessionLock: The logged-on user locks the session.
     * - SessionShutdown: The session is shut down.
     * - SessionUnLock: The logged-on user unlocks the session.
     * - DesktopTimerReboot: The cloud computer is rebooted by a scheduled task.
     * - ConsoleConnect: The console is connected before the session starts.
     * - SessionLogOn: The session starts.
     * - SessionPopup: The session exits before disconnection.
     * - SessionDisconnect: The session is disconnected.
     * - ConsoleDisconnect: The console is disconnected after the session is logged off.
     *
     * This parameter is required.
     *
     * @example
     * SessionLogOn
     */
    sessionStatus?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
